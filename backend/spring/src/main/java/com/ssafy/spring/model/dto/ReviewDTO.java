package com.ssafy.spring.model.dto;

import com.ssafy.spring.model.entity.Review;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReviewDTO {

    private StoreDTO store;
    private UserDTO user;
    private Integer score;
    private String content;
    private LocalDateTime regTime;

    @Builder
    public ReviewDTO(Review review) {
        this.store = new StoreDTO(review.getStore());
        this.user = new UserDTO(review.getUser());
        this.score = review.getScore();
        this.content = review.getContent();
        this.regTime = review.getRegTime();
    }
}