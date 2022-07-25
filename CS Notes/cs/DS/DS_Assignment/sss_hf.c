#include<stdio.h>
#include<stdlib.h>
int fn(char *pusn)
{
 //pusn=pusn+3;
 printf("%s ",pusn);
 return atoi(pusn);
}
main()
{
 char *usn="PES1201700118"; 
 printf("%d",fn(usn));
}
