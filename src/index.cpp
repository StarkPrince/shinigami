#include <iostream>
#include <string.h>
#include <vector>
#include <cmath>
using namespace std;
typedef long long ll;

bool prime(ll n)
{
    bool is_prime = true;
    for (ll i = 2; i < n; i++)
        if (n % i == 0)
        {
            is_prime = false;
            return is_prime;
        }
    return is_prime;
}

ll gcd(ll a, ll b)
{
    if (min(a, b) == 0)
        return max(a, b);
    return gcd(b, a % b);
}

int main()
{
#ifndef ONLINE_JUDGE
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
#endif
    int a;
    cin >> a;
    while (a--)
    {
        ll a;
        cin >> a;
        int b[a];
        for (int i = 0; i < a; i++)
        {
            cin >> b[i];
        }
        int ans = 0;
        vector<vector<ll>> z;
        for (int i = 0; i < a - 1; i++)
        {
            ll s = b[i], t = b[i + 1];
            if (gcd(s, t) != 1)
            {
                vector<ll> k;
                k.push_back(i + 1);
                k.push_back(i + 2);
                cout << i << "just" << endl;
                ans += 1;
                if (s <= t)
                    i % 2 == 0 ? t = pow(10, 9) + 9 : t = pow(10, 9) + 7;
                else
                    i % 2 == 0 ? s = pow(10, 9) + 7 : s = pow(10, 9) + 9;
                b[i] = s;
                b[i + 1] = t;

                k.push_back(s);
                k.push_back(t);
                z.push_back(k);
            }
        }
        cout << ans;
        for (int i = 0; i < z.size(); i++)
        {
            for (int j = 0; j < 4; j++)
                cout << z[i][j] << " ";
            cout << endl;
        }
    }
}