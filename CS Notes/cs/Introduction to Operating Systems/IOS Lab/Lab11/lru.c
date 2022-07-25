#include<stdio.h>
#include<stdlib.h>
void main()
{
	int len;
	printf("Enter length of reference string: ");
	scanf("%d",&len);
	int c= 0;
	int arr[len];
	for (int i =0; i< len; i++)
	{
		printf("Enter page %d: ", i+1);
		scanf("%d",&arr[i]);
	}
	int nframe;
	printf("Enter no of frames: ");
	scanf("%d",&nframe);
	
	int frames[nframe];
	int count[nframe];
	for(int i=0; i<nframe; i++)
	{
		frames[i] = -1;
		count[i]= 0;
	}
	int pfcount = 0;
	for (int i = 0; i<len; i++)
	{
		int min = 999; 
		int pf = 0;
		int flag = 0;
		int index =0;
		for (int j =0; j<nframe; j++)
		{
			if(arr[i] == frames[j])
			{
				c++;
				count[j] = c;
				flag = 1;
				pf = 0;
			}
		}
		if (flag == 0)
		{
			for (int j =0; j<nframe; j++)
			{
				if(count[j] < min)
				{
					index = j;
					min = count[j];
				}
			}
			frames[index] = arr[i];
			c++;
			count[index] = c;
			pf = 1;
		}
		printf("\n");
		for (int j =0; j<nframe; j++)
			printf("%d ", frames[j]);  
		printf("\n PAGE FAULT %d", pf);
		if (pf == 1)
		{
			pfcount++;
		}
		
	}
	printf("TOTAL PAGE FAULTS %d\n", pfcount);
}
		
		
