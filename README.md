# 🌟 Espero (모노레포 React Native 앱)

## 📘 소개
Espero는 React Native와 TypeScript 기반의 모노레포 구조 앱으로, 공용 패키지(design-system 등)와 클라이언트와 어드민 앱으로 구성되어 있습니다.
클린 아키텍쳐, 협업 편의성(일관된 타입 검사, 자동 Git 훅) Nativewind 스타일링 등 현대적인 개발 환경을 지향합니다.

## 📁 구조
```
├── package.json             # 루트 워크스페이스 정의 및 공통 스크립트
├── tsconfig.base.json       # TypeScript 공통 설정
├── prettierrc               # prettier 공통 설정
├── prettierignore           # prettier 공통 설정 - 무시 파일
├── commitlintrc.cjs         # commitlint 설정
├── eslint.config.cjs        # eslint 공통 설정
├── lint-staged.config.js    # lint-staged 공통 설정
├── .husky/
│   ├── pre-commit
│   └── commit-msg
├── services/
│   ├── client/              # 사용자 React Native 앱
│   │   ├── src/
│   │   └── tsconfig.json
│   ├── admin/               # 관리자 React Native 앱
│   │   ├── src/
│   │   └── tsconfig.json
├── packages/
│   ├── design-system/       # 디자인 시스템
│   │   ├── src/
│   │   │   ├── components
│   │   │   ├── tokens
│   │   │   └── theme
└── node_modules/
```

## ⚙️ 개발 환경
**기본 정보** <br/>
•	패키지 매니저: yarn@4.9.1 <br/>
•	워크스페이스: packages/\*, services/\* <br/>
•	TypeScript 버전 고정: 5.8.3 (resolutions 사용) <br/>
