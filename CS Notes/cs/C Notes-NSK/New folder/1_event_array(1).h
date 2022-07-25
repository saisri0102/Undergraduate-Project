#ifndef EVENT_ARRAY_H
#define EVENT_ARRAY_H
#include "1_event.h"
#define SIZE 10
typedef event_t event_array_t[SIZE];
void read_event_array(event_array_t, int);
void disp_event_array(const event_array_t, int);
int count_events_in_month(const event_array_t events, int n, int mm);
#endif
