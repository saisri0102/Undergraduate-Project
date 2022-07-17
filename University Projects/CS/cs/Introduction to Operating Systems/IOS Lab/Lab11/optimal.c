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
		for(int j=0; j<nframe; j++)
		{
			count[j] = 100;
		}
		for (int j =0; j<nframe; j++)
		{
			if(arr[i] == frames[j])
			{
				flag = 1;
				pf = 0;
			}
		}
		if (flag == 0)
		{
			for (int j =0; j<nframe; j++)
			{
				for(int k=i+1; k<len; k++)
				{
					if(arr[k] == frames[j])
					{
						count[j] = k;
						break;
					}
				} 
			}
			
			int max = -1;
			for (int j =0; j<nframe; j++)
			{
				if(count[j] > max)
				{
					index = j;
					max = count[j];
				}
			}
			frames[index] = arr[i];
			pf = 1;
		}
		printf("\n");
		for (int j =0; j<nframe; j++)
			printf("%d (%d) ", frames[j], count[j]);  
		printf("\n PAGE FAULT %d", pf);
		if (pf == 1)
		{
			pfcount++;
		}
		
	}
	printf("TOTAL PAGE FAULTS %d\n", pfcount);
}
