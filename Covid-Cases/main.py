# Covid cases checker with covid module

from covid import Covid
covid = Covid()
cases = covid.get_status_by_country_name("india")
for x in cases:
    print(x, ":", cases[x])

# Hope you like it. Feel free to make any changes you want. All PRs are welcomed
