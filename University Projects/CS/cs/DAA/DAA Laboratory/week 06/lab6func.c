#include "lab6.h"
double time_taken(struct timespec * start, struct timespec * end){
	double t = 0.0;
	t = (end->tv_sec - start->tv_sec) * 1000;
	t += (end->tv_nsec - start->tv_nsec) * 0.000001;
	return t;
}
char* allocate(int size){
	char * a = (char *)calloc(size+1,sizeof(char));
	return a;
}

void free_alloc(char *a){
	free(a);
	a = NULL;
}

int check_power_two(int a){
	return a&(a-1);
}
int is_even(int a){
	return a%2;
}
int convert_to_num(char *p){
	int num = 0;
	int digit;
	for(int i = 0; i < strlen(p);i++){
		digit = p[i] - '0';
		num = 10*num + digit;
	}
	return num;
}
int length(char * p){
	return strlen(p);
}
char * convert_to_arr(int num){
	char t;
	if(num == 0){
		char * str ;
		str = allocate(1);
		t = num+'0';
		strncpy(str,&t,1);
		return str;
	}
	int length = (int)floor(log10((float)num)) + 1;
	while(is_even(length) != 0){
		length++;
	}
	char * arr;
	arr = allocate(length);
	memset(arr,0,length);
	int i = 0;
	while(i < length){
		arr[i] = num%10 + '0';
		num/= 10;
		i++;
	}
	arr[length] = '\0';
	arr = reverse(arr);
	return arr;
}
char * reverse(char *str){
	char temp;
	int i = 0;
  int j = strlen(str) - 1;

  while (i < j) {
      		temp = str[i];
      		str[i] = str[j];
      		str[j] = temp;
      		i++;
      		j--;
   	}
	return str;
}
void split(char *a,int k,char *b,char * c){
	memset(b,0,k);
	strncpy(b,a,k);
	b[k] = '\0';
	if(is_even(k) && k!=1){
		b = add_zero(b);
	}
	memset(c,0,k);
	strncpy(c,a+k,k);
	c[k] = '\0';
	if(is_even(k) && k!=1){
		c = add_zero(c);
	}
}
char * Karatsuba(char *a,char *b,int k){
	int res;
	int t = k;
	if(k == 1){
		res =convert_to_num(a)*convert_to_num(b);
		return convert_to_arr(res);
	}
	if(is_even(k) != 0){
		k++;
	}
	int m2 = k/2;
	char *a1,*a2,*b1,*b2;
	a1 = allocate(m2);
	a2 = allocate(m2);
	b1 = allocate(m2);
	b2 = allocate(m2);
	split(a,m2,a1,a2);
	split(b,m2,b1,b2);
	char *p1,*p2,*p3,*a3,*b3;
	a3 = (char *)add_large_num(a1,a2);
	b3 = (char *)add_large_num(b1,b2);
	a3 = (char *)remove_zero(a3);
	b3 = (char *)remove_zero(b3);
	int a3len = length(a3);
	int b3len = length(b3);
	if(a3len < b3len){
		//a3 = make_equal(a3,b3len - a3len);
		b3 = (char *)remove_zero(b3);
		b3len = length(b3);
		if(a3len < b3len){
			a3 = make_equal(a3,b3len - a3len);
			a3len = length(a3);
			b3len = length(b3);
		}
		if(a3len > b3len){
			b3 = make_equal(b3,a3len - b3len);
			a3len = length(a3);
			b3len = length(b3);
		}
	}
	if(a3len > b3len){
		//b3 = make_equal(b3,a3len - b3len);
		a3 = (char *)remove_zero(a3);
		a3len = length(a3);
		if(a3len < b3len){
			a3 = make_equal(a3,b3len - a3len);
			a3len = length(a3);
			b3len = length(b3);
		}
		if(a3len > b3len){
			b3 = make_equal(b3,a3len - b3len);
			a3len = length(a3);
			b3len = length(b3);
		}
	}
	p1 = Karatsuba(a1,b1,m2);
	p2 = Karatsuba(a2,b2,m2);
	int x = a3len;
	p3 = Karatsuba(a3,b3,x);



	free_alloc(a1);
	free_alloc(a2);
	free_alloc(a3);
	free_alloc(b1);
	free_alloc(b2);
	free_alloc(b3);
	return get_result(p1,p2,p3,k);
}

char * add_large_num(char*a,char*b){
	char * res;
	int carry = 0,k = 0,sum = 0;
	int c = 0,d = 0;
	int alen = strlen(a);
	int blen = strlen(b);
	int length = alen + 1;
	if(length%2!=0){
		while(check_power_two(length) != 0 ){
			length++;
		}
	}
	k = 0;
	res =	 allocate(length);
	for(int i = alen - 1,j = blen - 1;i  >= 0,j >= 0;i--,j--){
		c = a[i] - '0';
		d = b[j] - '0';
		sum = c + d + carry;
		res[k] = sum % 10 + '0';
		carry = sum/10;
		k++;
	}
	res[k++] = carry + '0';
	carry = 0;
	sum = 0;
	while(k < length ){
		res[k] = carry + '0';
		k++;
	}
	res[length] = '\0';
	res = reverse(res);
	return res;
}
void display(char * a){
	int t = length(a);
	int i = 0;
	while(a[i] == '0'){
		i++;
	}
	printf("%s\n",a+i);
}
char * remove_zero(char *a){
	int t = strlen(a);
	int i = 0;
	int j;
	/*if(!check_power_two(t)){
		return a;
	}*/
	while((a[i] == '0')){
		i++;
	}
	if(i == t){
		i--;
	}
	if(i == 0){
		return a;
	}
	if(t == 1){
		return a;
	}
	if(check_power_two(i) != 0){
		a = reverse(a);
		int j = t - i;
		while(check_power_two(j) != 0){
			j++;
		}
		char * temp = allocate(j);
		strncpy(temp,a,j);
		for(int i = 0;i < j;i++){
			a[i] = temp[i];
		}
		a[j] = '\0';
		a = reverse(a);
		free_alloc(temp);
		temp = NULL;
		return a;
	}
	t -= i;
	/*if(!check_power_two(t - 1) && t>2){
		t = t - 1;
	}*/
	if(check_power_two(t) != 0){
		return a;
	}
	char * temp = allocate(t);
	strncpy(temp,a+i,t);
	for(int i = 0;i < t;i++){
		a[i] = temp[i];
	}
	a[t] = '\0';
	free_alloc(temp);
	temp = NULL;
	return a;
}
char * get_result(char * p1,char * p2,char * p3,int m){
	int len = 2*m;
	char * result = (char *)allocate(len);
	init(result,len);
	p1 = remove_zero(p1);
	p2 = remove_zero(p2);
	p3 = remove_zero(p3);
	int p1len = length(p1);
	int p2len = length(p2);
	if(p1len < p2len){
		p1 = make_equal(p1,p2len - p1len);
		p1len = length(p1);
	}
	if(p1len > p2len){
		p2 = make_equal(p2,p1len - p2len);
		p2len = length(p2);
	}
	char * p4 = add_large_num(p1,p2);
	p4 = remove_zero(p4);
	int p3len = length(p3);
	int p4len = length(p4);
	if(p3len < p4len){
		p3 = make_equal(p3,p4len - p3len);
		p3len = length(p3);
	}
	if(p3len > p4len){
		p4 = make_equal(p4,p3len - p4len);
		p4len = length(p4);
	}
	char * p5 = difference(p3,p4);
	int p5len = length(p5);
	p1 = reverse(p1);
	p2 = reverse(p2);
	p5 = reverse(p5);
	int k = 0;
	int i = 0;
	int j = 0;
	int sum = 0,carry = 0;
	while(i < p2len){
		result[i] = p2[i];
		i++;
	}
	i = k + m/2;
	while(j	< p5len){
		sum = (((result[i] - '0') + (p5[j] - '0')) + carry);
		carry = sum/10;
		sum = sum%10;
		if(carry < 0 && sum < 0){
			result[i] = '0';
			carry = 0;
			sum = 0;
		}
		else{
			result[i] = sum +'0';
		}
		i++;
		j++;
	}
	i = k + m;
	j = 0;
	while(j	< p1len){
		sum = (((result[i] - '0') + (p1[j] - '0')) + carry);
		carry = sum/10;
		sum = sum%10;
		result[i] = sum +'0';
		i++;
		j++;
	}
	result[len] = '\0';
	result = reverse(result);
	free_alloc(p1);
	free_alloc(p2);
	free_alloc(p3);
	free_alloc(p4);
	free_alloc(p5);
	return result;
}
char * add_zero(char * a){
	int t = length(a);
	int q = t;
	if(is_even(t) == 0){
		return a;
	}
	while(is_even(t)){
		t++;
	}
	char * temp = allocate(t);
	init(temp,t);
	temp[t] = '\0';
	int k = q - 1;
	for(int j = t - 1;j >= 0;j--){
		temp[j] = a[k];
		k--;
		if(k == -1){
			break;
		}
	}
	if(q != t){
		free_alloc(a);
		a = allocate(t);
	}
	strncpy(a,temp,t);
	a[t]= '\0';
	free_alloc(temp);
	temp = NULL;
	return a;
}
char * make_equal(char * a,int d){
	int t = length(a);
	int len = t+d;
	char * temp = allocate(len);
	init(temp,len);
	temp[len] = '\0';
	int j = len - 1;
	for(int i = 0;i < t;i++){
		temp[j] = a[t - i - 1];
		j--;
	}
	free_alloc(a);
	a = temp;
	return a;
}
void init(char * arr,int size){
	int i;
	for(i = 0;i < size;i++){
		arr[i] = '0';
	}
	arr[i] = '\0';

}
char * difference(char * num1,char * num2){
	int x = length(num1) ;
	int temp;
	char * result;
	result = allocate(x);
	init(result,x);
	int i = x - 1,k = 0,borrow = 0;
	while(i >= 0){
		temp = ((num1[i] - '0') -( num2[i] - '0') - borrow);
		if(temp < 0){
			temp += 10;
			borrow = 1;
		}
		else{
			borrow = 0;
		}
		result[k] = temp + '0';
		k++;
		i--;
	}
	result[x] = '\0';
	result = reverse(result);
	return result;
}
