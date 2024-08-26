<?php

// Get the contents of the font file.
$font_contents = file_get_contents('FasterOne-eKem.ttf');

// Compress the font contents.
$compressed_font_contents = gzcompress($font_contents);

// Write the compressed font contents to a new file.
file_put_contents('compressed_font.ttf', $compressed_font_contents);

// Close the PHP file.
?> 