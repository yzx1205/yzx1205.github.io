var posts=["2026/08/06/hello-world/","2026/08/11/Git手册/","2026/08/07/vscode-cmake-vcpkg项目模板/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };