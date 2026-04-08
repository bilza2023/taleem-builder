# 🚀 **taleem-action-runner (final name 👍)**

## 🎯 Mission

> Convert a **time-based state snapshot** into **DOM class changes**

That’s it.
No animation logic. No decisions. Just **state → DOM**

---

## 🧠 Core Idea

> At time `t` → we fetch ONE complete state → apply it fully

✔ no incremental updates
✔ no memory of past
✔ fully deterministic

---

## 📦 Input (Action Shape)

```json
{
  "time": 3,
  "state": {
    "visible": ["id1", "id2"],
    "hidden": ["id3"]
  }
}
```

### Rules:

* `time` → when this state becomes active
* `state` → **complete snapshot**
* each item appears in **only one group**
* groups = semantic (visible, hidden, etc.)

---

## ⏱ Time Function

```js
getStateAtTime(actions, currentTime)
```

👉 returns:

> latest state where `action.time <= currentTime`

✔ assumes actions are sorted
✔ stops early (efficient)

---

## ⚙️ Runner Flow

```js
runActions(actions, currentTime)
```

### Steps:

1. Get state at time `t`
2. Reset DOM (remove known classes)
3. Apply state → map groups → classes

---

## 🔄 Translation Layer (CRITICAL)

```js
"group name" → "CSS class"
```

### Current mapping:

| State   | CSS    |
| ------- | ------ |
| hidden  | hidden |
| visible | none   |

---

## 🔥 Key Principle

> We do NOT toggle classes
> We **re-render state**

---

## 🧩 Mental Model

* **Actions** → timeline
* **State** → truth at time `t`
* **Runner** → enforces truth on DOM

---

## 🏁 Final Line

> “At any moment, DOM must exactly match the state — nothing more, nothing less.”
