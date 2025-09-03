package com.Garvit.CVSculpt_backend.Service;

import java.io.IOException;
import java.util.Map;

public interface CoverLetterService {
    Map<String, Object> generateCVResponse(String cvDescription) throws IOException;
}
