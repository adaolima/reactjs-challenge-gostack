# 🪓 Ax-grinding series  | ⚛️ ReactJS Concepts

## 🚀 GoStack exercise by Adão Lima

__Course by Rocketseat__

Install dependecies

```shell
Yarn
```

Run app

```shell
Yarn start
```

Test app

```shell
Yarn test
```

### ⚡️💡 Insight

In the **delete question**, I´ve updated the repositories state, after dele the repository, by calling list api again. It trew me a error in the test.
So, I changed that to update state by remove the object from repositories array cloned, and set the state with this one. That passed to test.

Both solutions get the same result on screen. But, the last one save some server energy 'cause setted to the client the responsibility.
