// Exercise 3. Which of the following console.log messages will print? Why?
if (0) console.log("#1 zero is true"); // Won't print because 0 returns false
if ("0") console.log("#2 zero is true"); // Will print because any string that isn't empty returns true
if (null) console.log("null is true"); // Won't print becaues null returns false
if (-1) console.log("negative is true"); // Will print because numbers other than 0 return true
if (1) console.log("positive is true"); // Will print because numbers other than 0 return true
