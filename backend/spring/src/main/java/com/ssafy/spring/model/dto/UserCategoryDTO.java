package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.UserCategory;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserCategoryDTO {

    private UserDTO user;
    private CategoryDTO category;

    @Builder
    public UserCategoryDTO(UserCategory userCategory) {
        this.user = new UserDTO(userCategory.getUser());
        this.category = new CategoryDTO(userCategory.getCategory());
    }

    @Getter
    public static class RegisterCategoryPostReq {
        @Schema(name = "categories", example = "[\"치킨\", \"피자\", \"패스트푸드\", \"고기\"]")
        List<String> categories;

        public RegisterCategoryPostReq() {}

        @Builder
        public RegisterCategoryPostReq(List<String> categories) {
            this.categories = categories;
        }
    }
}
