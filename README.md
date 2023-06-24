# How to Use This Shit

## Loop Methods
You have two options to choose from:

### forEach
This method is more compact and faster. It uses `$replaceText` and `$eval` to wrap each array value (`ELEMENT`) with the input code directly.

### repeat
This method is longer and slower. It uses multiple functions and repeats the code based on the array length. It then gets the `ELEMENT` value using `$splitText`.

## Escape Element
To prevent certain characters like `$`, `;`, and `]` in the array value from breaking the code, you need to use this. It is necessary when the array contains user-inputted values, such as `$message`. 

This step doesn't affect the "repeat" method.

## Array
This represents the source from which the code retrieves the `ELEMENT` value. Think of it as the first argument of `$textSplit`.

## Array Separator
This separates the elements within the array. Think of it as the second argument of `$textSplit`.

## Input
This refers to the code you want to convert. Use `ELEMENT` to represent the current array value.

## Output Separator
This separates each output in the output code. If set to none, it is represented by `SEPARATOR` in the output code.

# Example
Let's create a simple code that converts `$message` into the following format:
```
1. word
2. word2
3. word3
etc
```
To achieve that, set the options as follows:
- **Loop Method:** (choose any method, but `forEach` is recommended.)
- **Escape Element:** (checked)
- **Array:** `$message`
- **Separator:** (space)
- **Output Separator:** `\n`

### Input Code:
```
$var[i]. ELEMENT $var[i;$sum[$var[i];1]]
```
Click "convert"

The resulting output code will be:
```
$eval[%{DOL}%var[i\]. %{DOL}%url[decode\;$replaceText[$url[encode;$message];+;\] %{DOL}%var[i\;%{DOL}%sum[%{DOL}%var[i\]\;1\]\]
%{DOL}%var[i\]. %{DOL}%url[decode\;]\] %{DOL}%var[i\;%{DOL}%sum[%{DOL}%var[i\]\;1\]\]]
```

You can then put it into your code to be like this:
```
$nomention
$var[i;1]
$eval[%{DOL}%var[i\]. %{DOL}%url[decode\;$replaceText[$url[encode;$message];+;\] %{DOL}%var[i\;%{DOL}%sum[%{DOL}%var[i\]\;1\]\]
%{DOL}%var[i\]. %{DOL}%url[decode\;]\] %{DOL}%var[i\;%{DOL}%sum[%{DOL}%var[i\]\;1\]\]]
```

### Example Usage and Output
![example](https://user-images.githubusercontent.com/102880539/230498472-08af5f52-e50b-434a-8753-73991a817d05.jpg)
