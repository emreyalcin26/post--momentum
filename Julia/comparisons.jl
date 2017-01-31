# f(x) = ((1 + ((x[1]+x[2]+1)^2)*(19 - 14*x[1]+3*x[1]^2-14*x[2]+6*x[1]*x[2]+3*x[2]^2))*
#         (30 + ((2*x[1] - 3*x[2])^2)*(18 - 32*x[1] + 
#             12*x[1]^2 + 48*x[2] - 36*x[1]*x[2] + 27*x[2]^2))  )
# ∇f(x) = ForwardDiff.gradient(f,x)

# Beale
# f(x) = ( (1.5 - x[1] + x[1]*x[2])^2 
#      + (2.25 - x[1] + x[1]*x[2]^2)^2 
#      + (2.625 - x[1] + x[1]*x[2]^3)^2 )
# ∇f(x) = ForwardDiff.gradient(f,x)


# Rosenbrock
# f(x) = 100*(x[2] - x[1]^2)^2 + (x[1] - 1)^2
# ∇f(x) = ForwardDiff.gradient(f,x)

# Monkey Saddle
# f(x) = x[1]^3 - 3*x[1]*x[2]^2
# ∇f(x) = [3*x[1] - 3*x[2]^2; -6*x[1]*x[2]]

A = diagm([1; 1])
f(x) = 0.5*vecdot(x,A*x)
∇f(x) = A*x 

α = 1.5; β = 0.51

w = [1;1]; z = zeros(2)

N = 2000
fW = zeros(N)
wp = w
W = zeros(2,N)
for i = 1:N
    if i > 2
        #if vecdot(∇f(w), w - wp) > 0; println(i); z = zeros(2); end
    end
    W[:,i] = vecdot(∇f(w), w - wp)
    wp = w
    z = β*z + ∇f(w) 
    w = w - α*(∇f(w) + β*z) 
    println(f(w))
    if abs(f(w)) < 100; fW[i] = f(w); else; fW[i] = NaN; end 
    #W[:,i] = w
end

plot(fW)