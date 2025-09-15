#include<iostream>
using namespace std;
vector<int>ans(10,0);

int arr[100]={1,2,2,1,2,1,1,1,1};
int main(){
    int start=0;
    int i=9;
    while(i--)
    {
        if(arr[start]!=arr[start+1]){
            ans[arr[start+1]]++;
            start++;
        }
        else{
            start++;
        }
    }
}