#include <stdio.h>
#include <stdlib.h>
#define MAX 10

int visited[MAX], graph[MAX][MAX], queue[10], n, f = -1, r = -1;

void enqueue(int v)
{
	if(r >= MAX - 1)
		printf("Overflow\n");
	else
	{
		queue[++r] = v;
		if(f == -1)
			f = 0;
	}
}

int dequeue()
{
	if(f == -1)
	{
		printf("Underflow\n");
		exit(1);
	}
	else
	{
		int res = queue[f];
		f++;
		return res;
	}
}

void BFS(int v)
{
	enqueue(v);
	visited[v] = 1;
	printf("%d ", v);
	while(f != -1 || f < r)
	{
		v = dequeue();
		for(int i = 0; i < n; i++)
		{
			if(graph[v][i] && !visited[i])
			{
				enqueue(i);
				printf("%d ", i);
				visited[i] = 1;
			}
		}
	}
}

int main()
{
	int i, j, v, ele1, ele2, choice;
	printf("Enter the number of elements in the graph\n");
	scanf("%d", &n);
	for(i = 0; i < n; i++)
	{
		for(j = 0; j < n; j++)
			graph[i][j] = 0;
	}
	while(1)
	{
		printf("Enter your choice\n");
		scanf("%d", &choice);
		switch(choice)
		{
			case 1: //Entering a link between 2 elements
				printf("Enter the two element numbers being linked\n");
				scanf("%d %d", &ele1, &ele2);
				graph[ele1][ele2] = 1;
				break;
			case 2: //Implementing the BFS algorithm
				printf("Enter the start vertex\n");
				scanf("%d", &v);
				BFS(v);
				printf("\n");
				break;
			/*case 3: //Implementing the DFS algorithm
				DFS(0);*/
				break;
			default: exit(0);
		}
	}
}