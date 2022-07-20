# React 
## Typescript
-  TypeScript is a strongly typed programming language that builds on JavaScript
-  save u from some bugs
- [Beginner](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)


## React
 - SPA 
 - Famework vs libery?
 - why the modern framwork? benefit?
   - what's the pain?
     - html,css,js
     - state flow
     - skip the pefromance/auto part
 - let's look the prj (create react app)
   - package.json
      - dependency
      - run serve, run build
   - module bundler- webpack
      - [how to config](https://snh90100.medium.com/%E5%9C%A8-create-react-app-%E4%B8%AD%E4%BF%AE%E6%94%B9-webpack-%E8%A8%AD%E5%AE%9A-%E4%BB%A5%E8%AA%BF%E6%95%B4-webpack-alias-%E7%82%BA%E4%BE%8B-59fd9eeeffe7)
   - React mechanism:
      - JSX - [babel](https://babeljs.io/) 
      - every render create a node linked structure =>Virtual DOM
      - what react do for us is the steps of compare/update real dom (Reconciliation)
      - when would we need to compare
      - component base (Fn,Object) 
      - how DOM update: state change , parent render
      - higj level (container/smart) componethandle logic,low level(dummy) comp just render what it got 
        - props are readonly
   ### Features:
   - Css solution:
      -  there are many solutions  : [material-ui](https://mui.com/zh/)
   - Immuatable props and state lift
   - useEffect
   - Context and Composition


