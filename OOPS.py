def binarySearch(arr, key):

    start = 0
    end = arr-1
    mid = start + (end - start)/2
    while (start <= end):
        if (arr[mid] == key):
            return mid
