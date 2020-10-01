# @primer/gatsby-theme-doctocat

## 1.0.0
### Major Changes



- [`152402c`](https://github.com/primer/doctocat/commit/152402cd09f32a491f59283cc02570b0142f4bd9) [#184](https://github.com/primer/doctocat/pull/184) Thanks [@colebemis](https://github.com/colebemis)! - Update the `Do` and `Dont` component APIs to allow consumers to control how images are rendered:
  
  ```diff
  - <Do src="https://example.com/do.png">
  -   Use brief and direct communication
  - </Do>
  + <Do>
  +   <img src="https://example.com/do.png" alt="" />
  +   <Caption>Use brief and direct communication</Caption>
  + </Do>
  ```

### Minor Changes



- [`f6f5619`](https://github.com/primer/doctocat/commit/f6f56192406dd7d3144cbe1ec75955c8c383a689) [#186](https://github.com/primer/doctocat/pull/186) Thanks [@colebemis](https://github.com/colebemis)! - Make `Caption` component globally available in all markdown files as a [shortcode](https://mdxjs.com/blog/shortcodes)



- [`ea38980`](https://github.com/primer/doctocat/commit/ea38980e188f8a6eae562961b8a68c85449296dc) [#184](https://github.com/primer/doctocat/pull/184) Thanks [@colebemis](https://github.com/colebemis)! - Make `Do`, `Dont`, and `DoDontContainer` components globally available in all markdown files as [shortcodes](https://mdxjs.com/blog/shortcodes)



- [`ce82f93`](https://github.com/primer/doctocat/commit/ce82f93e026d820c282e188241b6b0807edd7a27) [#185](https://github.com/primer/doctocat/pull/185) Thanks [@colebemis](https://github.com/colebemis)! - Polish code example styles


### Patch Changes



- [`cab38c3`](https://github.com/primer/doctocat/commit/cab38c38eb00a9645991147b28a47a535dcd1d41) [#190](https://github.com/primer/doctocat/pull/190) Thanks [@colebemis](https://github.com/colebemis)! - Make the navigation dropdown background color dark



- [`5fb29c9`](https://github.com/primer/doctocat/commit/5fb29c9000dd2a26919f661d969142fa1938d329) [#187](https://github.com/primer/doctocat/pull/187) Thanks [@mvasilkov](https://github.com/mvasilkov)! - Fix typo in an internal import



- [`cab38c3`](https://github.com/primer/doctocat/commit/cab38c38eb00a9645991147b28a47a535dcd1d41) [#190](https://github.com/primer/doctocat/pull/190) Thanks [@colebemis](https://github.com/colebemis)! - Update the navigation dropdown icon from a `chrevon` to a `caret` to follow our [progressive disclosure guidelines](https://primer.style/design/ui-patterns/progressive-disclosure#progressive-disclosure-ui-patterns)
