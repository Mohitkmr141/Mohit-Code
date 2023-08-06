#include <iostream>
#include <cstring>
#include<string.h>

using namespace std;
class Hero
{

    // properties
private:
    int health = 98;
    int level;
    char *name ;
   

public:
    int getHealth()
    {
        return health;
    }
    void setHealth(int h)
    {
        health = h;
    }

    void setLevel(char l)
    {
        level = l;
    }
    int getLevel()
    {
        return level;
    }

    void setName(char name){
        strcpy(this->name,name);
    }

    // Hero(int health, int level)
    // {
    //     this->health = health;
    //     this->level = level;
    // }

    Hero(){
        cout<<"This is Default Constructor"<<endl;
        name = new char[49];
    }
    void print(){
        cout<<this->health<<endl;
        cout<<this->level<<endl;
    }

};


// Hero Ramesh;
// // cout<<Ramesh.health<<endl;
// Ramesh.setHealth(123);
// Ramesh.setLevel(12);
// cout<<Ramesh.getLevel()<<endl;

// cout<<Ramesh.getHealth()<<endl;

// Hero a;
// a.setHealth(123);
// cout<<a.getHealth()<<endl;

int main()
{
   
   Hero Ramesh(12,12);
   Hero Suresh(Ramesh);
   cout<<Suresh.getLevel()<<endl;
   cout<<Suresh.getHealth()<<endl;

    
 
    return 0;
}
