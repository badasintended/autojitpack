# autojitpack

Automatically send a request to JitPack after every release to save some headache

```yaml
name: release
on: 
  push:
    tags: "*"
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - run: chmod +x gradlew
      - run: ./gradlew build
      - uses: actions/upload-artifact@v2
        with:
          path: "./build/libs/**.jar"
      - uses: alexellis/upload-assets@0.2.2
        env:
          GITHUB_TOKEN: ${{ github.token }}
        with:
          asset_paths: '["./build/libs/*[0-9.].jar"]'
      - uses: badasintended/autojitpack@v0
```
