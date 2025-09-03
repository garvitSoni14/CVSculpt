package com.Garvit.CVSculpt_backend.Service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@Service
public class CoverLetterServiceImpl implements CoverLetterService{

    private ChatClient chatClient;
    private CoverLetterServiceImpl(ChatClient.Builder builder)
    {
        this.chatClient = builder.build();
    }

    @Override
    public Map<String, Object> generateCVResponse(String cvDescription) throws IOException {
        String promptString = this.loadPromptFromFile("coverletter_prompt.txt");
        String promptContent = this.putValuesToTemplate(promptString, Map.of("userDescription", cvDescription));

        Prompt prompt = new Prompt(promptContent);

        String response = chatClient.prompt(prompt).call().content();

        Map<String, Object> stringObjectMap = parseMultipleResponses(response);

        return stringObjectMap;
    }

    //reading data from the cover_letter_prompt.txt file
    String loadPromptFromFile(String filename) throws IOException {
        Path path = new ClassPathResource(filename).getFile().toPath();
        return Files.readString(path);
    }


    String putValuesToTemplate(String template, Map<String, String> values) {
        for (Map.Entry<String, String> entry : values.entrySet()) {
            template = template.replace("{{"+entry.getKey()+"}}", entry.getValue());
        }
        return template;
    }

    public static Map<String, Object> parseMultipleResponses(String response) {
        Map<String, Object> jsonResponse = new HashMap<>();
        String coverLetterContent = null;

        // Extract content inside <think> tags
        int thinkStart = response.indexOf("<think>") + 7;
        int thinkEnd = response.indexOf("</think>");
        if (thinkStart != -1 && thinkEnd != -1) {
            String thinkContent = response.substring(thinkStart, thinkEnd).trim();
            jsonResponse.put("think", thinkContent);
            // Extract cover letter content after the </think> tag
            coverLetterContent = response.substring(thinkEnd + 8).trim();
        } else {
            jsonResponse.put("think", null);
            // If no <think> tag, the whole response is the cover letter
            coverLetterContent = response.trim();
        }

        // Remove the specific introductory line if present
        String lineToRemove = "Here’s a professional IT job cover letter based on your input:";
        if (coverLetterContent != null && coverLetterContent.startsWith(lineToRemove)) {
            coverLetterContent = coverLetterContent.substring(lineToRemove.length()).trim();
        }

        jsonResponse.put("coverLetter", coverLetterContent);
        return jsonResponse;
    }
}
