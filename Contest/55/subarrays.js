for(i=0;i<n;i++)
    {
    /**take the element  a[i] and find
    possible combinations with copy[j]
    a[]= 1 2 3 c[]=1 2 3
    j=i+1,  with a[i] and find
    possible sub arrays from copy[i+1]*/
    for(j=i+1;j<n;j++)
        {
        count=1;
        //check the possibility of an index j to form sub array
        if((n-j)>=(noe- 1 ))
            {
            printf("%d," ,a[i]);
            x=j;
            sum=a[i];
            while(count<noe)
                {
                count++;
                printf("%d," ,copy[x]);
                sum+=copy[x];
                x++;
                }
            printf("- - -%d" ,sum);
            if(sum>max)
                {
                maxarry[0]=a[i];
                for(l=1,m=j;m++)
                maxarry[l]=c[m];
                max=sub;
                }
            printf("\n" );
            }
        }
    }
k++;
}
