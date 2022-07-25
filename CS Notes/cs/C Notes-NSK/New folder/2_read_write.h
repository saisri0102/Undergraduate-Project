//void read_matrix(int *, int, int); // NO
//void read_matrix(int **, int, int); // NO
//void read_matrix(int x[][], int, int); // NO
//void read_matrix(int x[5][], int, int); // NO
// x :is a pointer to an array of 4 int
//void read_matrix(int x[][4], int, int); // ok
void read_matrix(int (*x)[4], int, int); // ok x is a  pointer to a row
void disp_matrix(int (*x)[4], int, int); 

//disp_matrix();

