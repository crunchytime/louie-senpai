use strict;
use warnings;
my $filename = 'quality.txt';
open(my $fh, '<:encoding(UTF-8)', $filename)
or die "Could not open file '$filename' $!";
while (my $row = <$fh>) {
    chomp $row;
    my $key = $row;
    my $quality = $row;


    $key =~ s/\s+.*//gi; # clear anything after the first whiteline;

    $quality =~ s/^\d+\s+//gi; # clear any beginning numbers and whitespace
    $quality =~ s/\s+$//gi; # clear any trailing whitespace


    print "$key:";
    print "\"$quality\",\n";
}