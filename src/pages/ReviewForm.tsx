import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import axios from 'axios';

interface ReviewData {
  rating: number;
  review: string;
}

const ReviewForm = () => {
  const [rating, setRating] = useState<number | undefined>(undefined);
  const [review, setReview] = useState('');

  const handleRatingChange = (value: string) => {
    const numericValue = parseFloat(value);
    setRating(isNaN(numericValue) ? undefined : numericValue);
  };

  const handleReviewChange = (value: string) => {
    setReview(value);
  };

  const handleSubmit = async () => {
    if (rating === undefined || review.trim() === '') {
      // 리뷰 평점과 리뷰 내용이 입력되지 않은 경우 처리
      return;
    }

    const reviewData: ReviewData = {
      rating: rating,
      review: review,
    };

    try {
      const response = await axios.post<ReviewData>(
        'http://api.example.com/reviews',
        reviewData,
      );

      console.log(response.data); // 성공적인 응답 데이터

      // 추가적인 처리 작업...

      // 입력 필드 초기화
      setRating(undefined);
      setReview('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Text>리뷰 평점:</Text>
      <TextInput
        value={rating !== undefined ? rating.toString() : ''}
        onChangeText={handleRatingChange}
        placeholder="평점을 입력하세요"
        keyboardType="numeric"
      />

      <Text>리뷰 내용:</Text>
      <TextInput
        value={review}
        onChangeText={handleReviewChange}
        placeholder="리뷰를 입력하세요"
        multiline={true}
        numberOfLines={4}
      />

      <Button title="제출" onPress={handleSubmit} />
    </View>
  );
};

export default ReviewForm;
