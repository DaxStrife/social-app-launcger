# Social App Launcher

Transform URLs and open your users apps.

```bash
npm install social-app-launcher
```

## Description

The npm package social-app-launcher offers an elegant and efficient solution to open native applications instead of new browser tabs when clicking links, all based on the user's device platform.

## Platforms

### Yotube

https://www.youtube.com/watch?v=ApXoWvfEYVU&ab_channel=PostMaloneVEVO

### Instagram

https://www.instagram.com/hideo_kojima/

### Facebook

https://www.facebook.com/100044534585203

**NOTE:** Before the Facebook link can function, you need to obtain your user ID. I provide a page where I have obtained the user ID. [Link](https://es.piliapp.com/facebook/id/?url=https://www.facebook.com/eminem)

## Example

```jsx static
import React from "react";
import SocialAppLauncher from "social-app-launcher";

const url = "https://www.instagram.com/hideo_kojima/";

function App() {
  const handleClick = () => {
    SocialAppLauncher(url);
  };
  return (
    <div>
      <button onClick={handleClick}>Enter</button>
    </div>
  );
}

export default App;
```

## Contribution

We appreciate and encourage community contributions. If you wish to contribute to "Project Name," follow these steps:

1. **Fork the Repository**: Create your own fork of the repository on GitHub.
2. **Create a Branch**: Create a new branch for your contribution.
3. **Submit a Pull Request**: When your contribution is ready, submit a pull request. Be sure to follow our contribution guidelines.
