//In the array implementation of a binary search tree, the array is declared initially with all the elements equal to -1.
//The elements are inserted based on their key value in the array by locating its position.
void insert(int *t, int x)
{
	int i = 0;
	while(t[i] != -1)
	{
		if(x < t[i])
			i = i * 2 + 1;
		else
			i = 2 * (i + 1);
	}
	t[i] = x;
}

void preorder(int *t, int i)
{
	if(t[i] != -1)
	{
		printf("%d\n", t[i]);
		preorder(t, 2 * i + 1);
		preorder(t, 2 * i + 2);
	}
}

void postorder(int *t, int i)
{
	if(t[i] != -1)
	{
		preorder(t, 2 * i + 1);
		preorder(t, 2 * i + 2);
		printf("%d\n", t[i]);
	}
}

void inorder(int *t,int i)
{
	if(t[i] != -1)
	{
		inorder(t,2*i+1);
		printf("%d\n",t[i]);
		inorder(t,2*i+2);
	}
}
 
