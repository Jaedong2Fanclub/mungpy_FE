import { useState } from "react";

export const emailValidtion = {
  required: "이메일을 입력해주세요",
  maxLength: {
    value: 50,
    message: "이메일은 50자 이내로 입력가능합니다.",
  },
  pattern: {
    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
    message: "올바른 이메일 주소 형식을 입력해주세요.",
  },
};

export const usePasswordValidation = (getValues: any) => {
  const [passwordError, setPasswordError] = useState("");
  const [passwordColor, setPasswordColor] = useState("");

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError("");
      setPasswordColor("");
      return true;
    }

    const lengthCheck = /^.{8,15}$/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasUpperCase = /[A-Z]/.test(value);
    const hasDigit = /\d/.test(value);
    const hasSpecialChar = /[@$!%*#?&]/.test(value);

    if (!lengthCheck) {
      setPasswordError("비밀번호는 8자 이상 15자리 이하입니다.");
      return false;
    }

    const strength =
      (hasLowerCase ? 1 : 0) +
      (hasUpperCase ? 1 : 0) +
      (hasDigit ? 1 : 0) +
      (hasSpecialChar ? 1 : 0);

    if (strength === 1) {
      setPasswordError("비밀번호 안전도 낮음");
      setPasswordColor("#F00001");
    } else if (strength === 2) {
      setPasswordError("비밀번호 안전도 보통");
      setPasswordColor("#F09A00");
    } else if (strength >= 3) {
      setPasswordError("비밀번호 안전도 높음");
      setPasswordColor("#006EFF");
    } else {
      setPasswordError("");
      setPasswordColor("");
    }
    return true;
  };

  const validateConfirmPassword = (value: string) => {
    return value === getValues("password") || "비밀번호가 일치하지 않습니다.";
  };

  return {
    validatePassword,
    validateConfirmPassword,
    passwordError,
    passwordColor,
  };
};

export const nameValidation = (value: any) => {
  if (value.trim() !== value) {
    return "입력 값의 앞 뒤에는 공백이 없어야 합니다.";
  }
  if (value.length < 1 || value.length > 15) {
    return "입력 값은 최소 1글자, 최대 15자여야 합니다.";
  }
  if (!/^[가-힣a-zA-Z\s]+$/.test(value)) {
    return "한글, 영어, 공백만 입력 가능합니다.";
  }
};

export const phoneValidation = {
  require: "휴대폰 번호를 입력해주세요",
  validate: {
    format: (value: any) => {
      const phoneRegex = /^(\d{3}-\d{4}-\d{4})$/;
      return phoneRegex.test(value) || "휴대폰 번호 형식이 올바르지 않습니다.";
    },
  },
};

export const idValidation = {
  require: "아이디를 입력해주세요",
  maxLength: {
    value: 8,
    message: "아이디는 8자 이내로 입력가능합니다.",
  },
};

export const BusinessNumberValid = (strNum: string) => {
  // 하이픈을 자동으로 넣어주는 로직
  const formattedNum = strNum.replace(/\D/g, ""); // 숫자 외 문자 모두 제거

  // 10자리의 숫자인지 확인
  if (formattedNum.length === 10) {
    const regsplitNum: number[] = formattedNum
      .split("")
      .map((item) => parseInt(item, 10));
    const regkey: number[] = [1, 3, 7, 1, 3, 7, 1, 3, 5];
    let regNumSum = 0;

    // 유효성 체크
    for (let i = 0; i < regkey.length; i++) {
      regNumSum += regkey[i] * regsplitNum[i];
    }
    regNumSum += Math.floor((regkey[8] * regsplitNum[8]) / 10);
    const regCheck =
      Math.floor(regsplitNum[9]) === (10 - (regNumSum % 10)) % 10;

    // 유효성 검증 후 하이픈을 포함한 번호 반환
    if (regCheck) {
      return formattedNum.replace(/(\d{3})(\d{2})(\d{5})/, "$1-$2-$3");
    } else {
      return false;
    }
  }
  return false;
};
