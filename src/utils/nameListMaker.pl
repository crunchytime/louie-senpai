use strict;
use warnings;
my $filename = 'names.txt';
open(my $fh, '<:encoding(UTF-8)', $filename)
or die "Could not open file '$filename' $!";
while (my $row = <$fh>) {
    chomp $row;
    $row =~s/\s+$//gi; 
    print "\"$row\", ";
}