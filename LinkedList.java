import java.util.*;

public class LinkedList {

    public static class Node {

        int data;
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;

        }

    }

    public static Node head;
    public static Node tail;
    public static int size;

    public void addFirst(int data) {

        // if linkedlist is empty

        Node newNode = new Node(data);
        if (head == null) {
            head = tail = newNode;
            return;
        }
        newNode.next = head;
        head = newNode;
        size++;

    }

    public void addLast(int data) {
        Node newNode = new Node(data);
        // if linkedlist is empty
        if (head == null) {

            head = tail = newNode;
            return;
        }
        tail.next = newNode;
        tail = newNode;
        size++;

    }

    public void printList() {

        if (head == null) {
            System.out.println("Empty");
            return;
        }
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
        System.out.println();
    }

    public void add(int idx , int data){
        Node newNode = new Node(data);
        Node temp = head;
        int i = 0;
        while(i<idx-1){

            i++;
        }
        newNode = temp.next;
        temp.next = temp;

        

        
        



    }
    
    

    
    public static void main(String[] args) {

        LinkedList ll = new LinkedList();
        ll.head = new Node(1);
        ll.head.next = new Node(2);

        ll.addFirst(1);
        ll.printList();
        ll.addFirst(2);
        ll.printList();
        ll.addFirst(3);
        ll.printList();

        ll.addLast(10);
        ll.printList();
        ll.addLast(11);
        ll.printList();

        ll.addLast(1123);

        ll.add(2, 9089);
        ll.printList();
        ll.add(2,1203);
        ll.printList();
        ll.add(2, 123);

        ll.printList();
    }

}
