These are issues I bumped into while making this project. I'm listing them for my own reference, to help me reinforce and to help me in the future, in case I run into similar problems again.

## Elements are null?
Include *defer* in the script tag:

```html
<script src="script.js" defer></script>
```

Otherwise, the script will run before the body is reached.