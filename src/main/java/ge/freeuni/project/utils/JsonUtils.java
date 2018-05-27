package ge.freeuni.project.utils;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.joda.JodaModule;

import java.io.IOException;

import static org.springframework.util.StringUtils.isEmpty;

public class JsonUtils {

    private static ObjectMapper jsonMapper = createMapper();

    public static ObjectMapper createMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JodaModule());
        mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
        mapper.enable(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES);
        return mapper;
    }

    public static String toJson(Object object) {

        if (object == null) {
            return null;
        }

        try {
            return jsonMapper.writeValueAsString(object);
        } catch (IOException e) {
            throw new IllegalStateException("can't convert to json", e);
        }
    }

    public static <T> T fromString(String content, Class<T> clazz) {
        if (isEmpty(content)) {
            throw new IllegalStateException("can't convert to object, content is empty");
        }
        try {
            return jsonMapper.readValue(content, clazz);
        } catch (IOException e) {
            throw new IllegalStateException("can't convert String to Object", e);
        }
    }
}

