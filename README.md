# How tailwind error fix

just add src/index.css and configure it , yarn install , pkgs same doc

<!-- makes svg icons  -->
<!-- go icons.js // copy svg , makes js file and paster and enjoy -->
<!-- also we add direct condition into className -->
<!-- darkMode:  dark:bg-slate-800 -->
<!-- customize theme: and also we direct customize compnents like Card  -->

<!-- customize plgin / change base , components  -->

why grid :

<!-- used to makes interactive and responsive web layouts
a powerful way to structure and position elements in two-dimensional grids
complete control over items and to set and positioned anywhere ] -->

grid-row , grid-columns :

<!-- placement of grid items within a grid containe -->

Syntax: grid-column: <start-line> / <end-line>;
start-line: Specifies the grid line where the grid item starts.
end-line: Specifies the grid line where the grid item ends.
Example Usage:
grid-column: 1 / 3;: The grid item starts from the first grid line and ends at the third grid line, spanning two columns.
grid-column: 3 / span 2;: The grid item starts from the third grid line and spans two columns.
Special Values:
auto: Automatically places the grid item based on the size of its contents.
span <n>: Spans the grid item across <n> grid tracks.
-1: Represents the last line of the grid.
Example Usage:
grid-row: auto;: The grid item will be automatically placed within the grid row based on its content size.
grid-column: 1 / -1;: The grid item starts from the first column and spans across all columns until the last one.
