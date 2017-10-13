# anfema serve-fastboot

[FastBoot](https://ember-fastboot.com) server module that can be used with any of our [Ember](https://emberjs.com) projects.



## Configuration

This project uses [rc](https://github.com/dominictarr/rc) to handle configuration. See `src/config.js` for defaults. The `distPath` is the only required configuration, although in most cases `port` and `host` should be adjusted as well.



## Building the binary

We use [pkg](https://github.com/zeit/pkg) to create a compiled binary of this project for easier deployment. See their documentation for details. For our linux machines the command looks like this:

```sh
pkg bin/fastboot --targets=node8-linux-x64
```

This gives you a simple `fastboot` binary that responds to the same configuration as running the node project would.



## Changelog

### 1.0.1

- Fix config loading

### 1.0.0 

- Initial release
