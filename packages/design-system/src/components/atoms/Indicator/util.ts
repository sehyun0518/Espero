import type { IDotStyle, GetDotStylePayload } from './type';

enum EnumDotType {
  SMALL,
  MEDIUM,
  LARGE,
}

const DotStyle = {
  [EnumDotType.SMALL]: {
    size: 2,
    opacity: 0.2,
  },
  [EnumDotType.MEDIUM]: {
    size: 4,
    opacity: 0.2,
  },
  [EnumDotType.LARGE]: {
    size: 5,
    opacity: 1,
  },
};

export const getDotStyle = ({ index, currentIndex, size }: GetDotStylePayload): IDotStyle => {
  let type = EnumDotType.SMALL;

  if (size < 5) {
    //5개 이하인 경우는 단수이기 때문에 큰 Dot으로만 구성
    // return ( idx === curPage ) ? EnumDotType.ACTIVE : EnumDotType.INACTIVE;
    return DotStyle[EnumDotType.LARGE];
  }

  if (currentIndex < 3) {
    // 현재 페이지가 3 이하일때는 별도로 배열을 지정해줌
    // 배열
    // 큰 큰 큰 중
    if (index < 3) {
      type = EnumDotType.LARGE;
    } else if (index < 4) {
      type = EnumDotType.MEDIUM;
    } else {
      type = EnumDotType.SMALL;
    }
  } else if (currentIndex === 3) {
    //4번째 페이지 일때 배열은 별도로 지정해줌
    // 배열
    // 중 큰 큰 큰 중
    if (index < 4) {
      if (index === 0) {
        type = EnumDotType.MEDIUM;
      } else {
        type = EnumDotType.LARGE;
      }
    } else if (currentIndex + 1 === index) {
      type = EnumDotType.MEDIUM;
    } else {
      type = EnumDotType.SMALL;
    }
  } else {
    //기타는 모두 동일한 로직으로 돌아가도록
    if (index > currentIndex) {
      if (index === currentIndex + 1) {
        type = EnumDotType.MEDIUM;
      }
    } else if (index < currentIndex) {
      if (index >= currentIndex - 2) {
        type = EnumDotType.LARGE;
      } else if (index === currentIndex - 3) {
        type = EnumDotType.MEDIUM;
      }
    } else {
      type = EnumDotType.LARGE;
    }
  }

  return DotStyle[type];
};
