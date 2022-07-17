import sys
from copy import deepcopy
def output(a):
	sys.stdout.write(str(a))
N = 9

field=[]
print("Enter the puzzle to be solved by entering the 9X9 matrix and pressing enter after entering 9 elements")
for i in range(9):
	field.append([])

	if (i)%3==0:
		print()

	n1,n2,n3,n4,n5,n6,n7,n8,n9 = input().split(" ") 
	field[i].append(int(n1))
	field[i].append(int(n2))
	field[i].append(int(n3))
	field[i].append(int(n4))
	field[i].append(int(n5))
	field[i].append(int(n6))
	field[i].append(int(n7))
	field[i].append(int(n8))
	field[i].append(int(n9))


"""field = [[5,1,7,6,0,0,0,3,4],
         [2,8,9,0,0,4,0,0,0],
         [3,4,6,2,0,5,0,9,0],
         [6,0,2,0,0,0,0,1,0],
         [0,3,8,0,0,6,0,4,7],
         [0,0,0,0,0,0,0,0,0],
         [0,9,0,0,0,0,0,7,8],
         [0,0,0,0,0,0,0,0,0],
         [0,0,0,0,0,0,0,0,0]] """

def print_field(field):
    for i in range(N):
        for j in range(N):
            cell = field[i][j]
            if cell == 0 or type(cell)==set:
                output('.')
            else:
                output(cell)
            if (j + 1) % 3 == 0 and j < 8:
                output(' |')
            if j != 8:
                output(' ')
        output('\n')
        if (i + 1) % 3 == 0 and i < 8:
            output("- - - + - - - + - - -\n")
def read(field):
	state = deepcopy(field)
	for i in range(N):
		for j in range(N):
			cell = state[i][j]
			if cell == 0:
				state[i][j] = set(range(1,10))
	return state
def done(state):
    for row in state:
        for cell in row:
            if type(cell)==set:
                return False
    return True
def propagate_step(state):
    new_units = False
    for i in range(N):
        for j in range(N):
            row = state[i] 						#for whole row
            values = set([x for x in row if type(x)!=set])

            if type(state[i][j])==set:
                state[i][j] -= values
                if len(state[i][j]) == 1:
                    state[i][j] = state[i][j].pop() 
                    new_units = True
                elif len(state[i][j]) == 0:
                    return False, None
    for j in range(N): 						# for column
        column = [state[x][j] for x in range(N)]
        values = set([x for x in column if type(x)!=set])
        for i in range(N):
            if type(state[i][j])==set:
                state[i][j] -= values
                if len(state[i][j]) == 1:
                    state[i][j] = state[i][j].pop()
                    new_units = True
                elif len(state[i][j]) == 0:
                    return False, None
    for x in range(3):						#for each box
        for y in range(3):
            values = set()
            for i in range(3*x, 3*x+3):
                for j in range(3*y, 3*y+3):
                    cell = state[i][j]
                    if not type(cell)==set:
                       values.add(cell)
            for i in range(3*x, 3*x+3):
                for j in range(3*y, 3*y+3):
                    if type(state[i][j])==set:
                        state[i][j] -= values
                        if len(state[i][j]) == 1:
                            state[i][j] = state[i][j].pop()
                            new_units = True
                        elif len(state[i][j]) == 0:
                            return False, None

    return True, new_units
def propagate(state):
    while True:
        solvable, new_unit = propagate_step(state)
        if not solvable:
            return False
        if not new_unit:
            return True
def solve(state):
    solvable = propagate(state)
    if not solvable:
        return None
    if done(state):
        return state
    for i in range(N):
        for j in range(N):
            cell = state[i][j]
            if type(cell)==set:
                for value in cell:
                    new_state = deepcopy(state)
                    new_state[i][j] = value
                    solved = solve(new_state)
                    if solved is not None:
                        return solved
                return None
state = read(field)
print_field(solve(state))

