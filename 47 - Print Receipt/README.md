# Print Receipt

Write a program that prints a receipt in the terminal.

`starter/main.js` holds a shopping cart with a few items. Each item has a name, a
unit price and a quantity. Your job is to turn it into a receipt.

## The task

Print one line per item and a total at the bottom. Roughly like this — the exact
formatting is up to you:

```
Coffee          2 x  45.50 kr    91.00 kr
Cinnamon bun    3 x  32.00 kr    96.00 kr
Sandwich        1 x  79.90 kr    79.90 kr
Tea             1 x  39.00 kr    39.00 kr
-----------------------------------------
Total                           305.90 kr
```

That is the whole task. If you finish there is more below, but you are not expected
to get further than this.

## If you have time left

Take them in any order you like.

1. **VAT.** The prices include VAT, and the VAT rate is 25 %. Print how much of the
   total is VAT, on its own line below the total.

2. **Discount.** Buy three or more of the same item and that item is 10 % cheaper.
   Show on the receipt that the discount was applied.

3. **Polish.** Do the columns still line up if an item has a much longer name, or
   costs a thousand kronor?

## Running the program

```
node main.js
```

You do not need to install any packages, and the program reads no input — everything
you need is in `main.js`.
