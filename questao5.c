/* Autor: Matheus Debtil Souza*/
#include<stdio.h>
#include<string.h>

int main()
{
    char original[10];
    char contrario[10];

    scanf("%s", original);
    int j = 0;
    for(int i=strlen(original)-1; i>=0;i--) {
        contrario[j] = original[i];
        j += 1;
    }

    contrario[j] = '\0';

    printf("%s", contrario); 
    return 0;
}