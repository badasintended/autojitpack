# autojitpack@v1

I hate it when I update a dependency version and it failed to sync because JitPack still building the package.

## Example

You'd probably want to use this action on a [`release`][1] event.

```yaml
on:
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: badasintended/autojitpack@v1
        with:
          version: ${{ github.event.release.tag_name }}
```

## Inputs

### `version`

**Required: yes**  
Current tag (or commit hash if you are that type of person.)
Unlike [`v0`][2] that use git ref and shitty regex to resolve the package,
now it requires you to manually input the version yourself.

### `timeout`

**Required: yesn't**  
**Default: `-1`**  
Amount of time in milisecond the request will wait to abort itself.
If set to `-1`, it'll wait for JitPack to finish building the package.
Or it'll timeout regardless, idk. Either way your user wont need to waste another click to resync your package.

[1]: https://docs.github.com/en/actions/reference/events-that-trigger-workflows#release
[2]: https://github.com/badasintended/autojitpack/tree/v0
