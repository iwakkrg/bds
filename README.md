# How to use this shit
## Loop methods
You can now choose which method do you prefer.

### forEach
Uses just `$replaceText` and `$eval`, generally more compact and faster. It works by wrapping each words (represented by `ELEMENT`) with the input code directly. 

### repeat
Uses a lot more functions, generally longer and slower. It works by repeating the code as long as the array length, then uses `$splitText` to get the `ELEMENT` value. 

## Escape element
To avoid characters like `$`, `;` and `]` in the array value from breaking the code. You have to use this if the array is from a user-inputted value such as `$message`.

Doesn't affect `repeat` method.

## Array
Where the code gets the `ELEMENT` value from. 

Just imagine this as the 1st arg of `$textSplit`.

## Array separator
To separate the array. 

Just imagine this as the 2nd arg of `$textSplit`.

## Input
The code to be converted. Use `ELEMENT` to represent the current array value.

## Output separator
Separates each output, represented by `SEPARATOR` in the output code if set to none.

# Example
We are going to make a simple code that converts `$message` to be:
```
1. word
2. word2
3. word3
etc
```
To do that, set the options to be like this:
- **loop method:** (any, `forEach` recommended)
- **escape element:** (checked)
- **array:** `$message`
- **separator:** (space)
- **output separator:** `\n`

**input code:**
```
$var[i]. ELEMENT $var[n;$sum[$var[n];1]]
```

The output should be like this:
```
$eval[%{DOL}%var[i\]. %{DOL}%url[decode\;$replaceText[$url[encode;$message];+;\] %{DOL}%var[i\;%{DOL}%sum[%{DOL}%var[i\]\;1\]\]
%{DOL}%var[i\]. %{DOL}%url[decode\;]\] %{DOL}%var[i\;%{DOL}%sum[%{DOL}%var[i\]\;1\]\]]
```

Then put it into your code to be like this:
```
$nomention
$var[i;1]
$eval[%{DOL}%var[i\]. %{DOL}%url[decode\;$replaceText[$url[encode;$message];+;\] %{DOL}%var[i\;%{DOL}%sum[%{DOL}%var[i\]\;1\]\]
%{DOL}%var[i\]. %{DOL}%url[decode\;]\] %{DOL}%var[i\;%{DOL}%sum[%{DOL}%var[i\]\;1\]\]]
```

### Example usage and output
![example](https://user-images.githubusercontent.com/102880539/230498472-08af5f52-e50b-434a-8753-73991a817d05.jpg)

