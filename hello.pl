#!/usr/bin/perl

print "Hello, world!";

open my $fileHandle, ">>", "./tem.txt" or die "Can't open";
print $fileHandle "Foo";
close $fileHandle;