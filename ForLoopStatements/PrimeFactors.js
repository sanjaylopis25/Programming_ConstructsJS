/*Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.   */

let N = 125
for (let i=1; i*i<=N; i++)
{
    if (N % i == 0)
        {
            console.log(i);
        }
}