#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct node {
	int data;
	struct node* left;
	struct node* right;
} node;

typedef struct tree {
	node* root;
} tree;


void tree_initialize(tree* tree)
{
    tree -> root = NULL;
}

void insert(node* root, int data) 
{ 
    /* If the tree is empty, return a new node */
    if (root == NULL) 
    {
        node* temp = (node*)malloc(sizeof(node));
	    temp -> data = data;
	    temp -> left = temp -> right = NULL;
        root = temp;   
    }
  
    /* Otherwise, recur down the tree */
    if (data < root -> data)
    {
    	printf("In left node\n");
    	insert(root -> left, data);
    }  
    else 
    {
    	printf("In right node\n");
        insert(root -> right, data);    
    }
} 

void tree_insert(tree* tree, int data)
{
	insert(tree -> root, data);
}

void print_in(node *root)
{
	if(root != NULL)
	{
		print_in(root -> left);
		printf("%d\n", root -> data);
		print_in(root -> right);
	}
}

/* Print elements on successive lines */
void tree_print_inorder(tree* tree)
{
	print_in(tree -> root);
}

void print_pre(node *root)
{
	if(root != NULL)
	{
		printf("%d\n", root -> data);
		print_in(root -> left);
		print_in(root -> right);
	}
}

void tree_print_preorder(tree* tree)
{
	print_pre(tree -> root);
}

void print_post(node *root)
{
	if(root != NULL)
	{
		print_post(root -> left);
		print_post(root -> right);
		printf("%d\n", root -> data);
	}
}

void tree_print_postorder(tree* tree)
{
	print_post(tree -> root);
}

/* Advisory: While some guarded discernment could perhaps lead you to 
 * more efficient implementations, you are requested to provide suitable recursive
 * solutions for the following function declarations. 
 */

int count_leaf(node *root)
{
	if(root == NULL)
		return 0;
	else if(!(root -> left || root -> right))
		return 1;
	else
		return count_leaf(root -> left) + count_leaf(root -> right);
}

int tree_count_leaves(tree* tree)
{
	return count_leaf(tree -> root);
}

node* max(node *root)
{
	if(!root -> right)
		return root;
	max(root -> right);
}

node* tree_max(tree* tree)
{
	if(tree -> root == NULL)
		return NULL;
	else
		return max(tree -> root);
}

node *min(node *root)
{
	if(!root -> left)
		return root;
	max(root -> left);
}

node* tree_min(tree* tree)
{
	if(tree -> root == NULL)
		return NULL;
	else
		return min(tree -> root);
}

int count_nodes(node *root)
{
	if(!root)
		return 0;
	else
		return 1 + count_nodes(root -> left) + count_nodes(root -> right);
}

int tree_count_nodes(tree* tree)
{
	return count_nodes(tree -> root);
}

int tree_count_internal_nodes(tree* tree)
{
	return count_nodes(tree -> root) - count_leaf(tree -> root);
}
	
void destroy(node *root)
{
	if(!root)
	{
		destroy(root -> left);
		destroy(root -> right);
		free(root);
	}
}

void tree_destruct(tree *tree)
{
    if(tree -> root != NULL)
	destroy(tree -> root);
}

int main() {
	int choice, loop = 1;
	tree my_tree;
	tree_initialize(&my_tree);
	while(loop) {
		scanf("%d", &choice);
		switch(choice) {
			int number_of_elements, element, index;
			int data;
			node *min_node, *max_node;
			case 1:
				/* Insert elements */ 
				scanf("%d", &element);
				tree_insert(&my_tree, element);
				break;
			case 2:
				/* Print elements in the inorder fashion */
				tree_print_inorder(&my_tree);
				printf("\n");
				break;
			case 3:
				/* Print elements in the preorder fashion */
				tree_print_preorder(&my_tree);
				printf("\n");
				break;
			case 4:
				/* Print elements in the postorder fashion */
				tree_print_postorder(&my_tree);
				printf("\n");				
				break;
			case 5:
				/* Print the smallest and the largest element */
				min_node = tree_min(&my_tree);
				max_node = tree_max(&my_tree);
				if(min_node || max_node)
					printf("%d %d\n", min_node -> data, max_node -> data);
				else
					printf("None\n");				
				break;
			case 6:
				/* Print the number of leaves, internal nodes and total number of nodes */
				printf("%d %d %d\n", tree_count_leaves(&my_tree), tree_count_internal_nodes(&my_tree), tree_count_nodes(&my_tree));				
				break;
			
			case 8: 
				tree_destruct(&my_tree);
				loop = 0;
			
		}
	}
	return 0;
}