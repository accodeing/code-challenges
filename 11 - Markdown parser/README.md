# Markdown parser
Your task is to write a simple Markdown parser. Due to the time constraints, we are focusing on headers only. You are to write a function that takes a heading in Markdown and parse it to HTML.

```
parse_markdown_heading('## There is nothing like first-hand evidence')
=> "<h2>There is nothing like first-hand evidence</h2>"
```

## Constraints
Your method must handle all six standard HTML headers and no more. These are valid input: `'# You know my method'`, `###### There is nothing more deceptive than an obvious fact`.

### Spaces
You should support spaces at the beginning and the end of the string and remove them from the output: `'   # Spaces at beginning of string'`, `'# Spaces at end of string   '`.

You should also remove spaces between the starting hashes and the heading text if there are more than 1. (Note that there must be at least one space for the input to be valid).

```
parse_markdown_heading('#   Spaces before text')
=> "<h1>Spaces before text</h1>"
```

You should NOT remove spaces inside the heading:
```
parse_markdown_heading('### A heading  including spaces')`
=> "<h3>A heading  including spaces</h3>"
```

### Headings including the # character
Your parser should support headings including the `#`-character:
```
parse_markdown_heading('# A heading #including # hashes')
-> "<h1>A heading #including # hashes</h1>"
```

### Unknown input
If your function receives unknown input, it should just simply return it.
```
parse_markdown_heading('#2# An invalid heading')
=> "#2# An invalid heading"
```

```
parse_markdown_heading('####### A heading of level seven')
=> "####### A heading of level seven"
```

```
parse_markdown_heading('##No space between starting hashes heading')
=> "##No space between starting hashes and heading"
```

