# mofron-effect-blur
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

blur effect for mofron

this effect makes the component to blurring.


# Install
```
npm install mofron mofron-effect-blur
```

# Sample
```html
<setting>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-effect-blur">Blur</tag>
</setting>

<Text effect=Blur("0.01rem")>Blur Effect</Text>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | value | string | blur size (css value) |

