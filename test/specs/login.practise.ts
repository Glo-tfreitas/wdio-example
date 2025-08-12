describe('Ecommerce Application',async()=>
{


    it('Login Fail page title-Smoke',async()=>
    {
//webdriverio Async  (Sync)

        await   browser.url("/loginpagePractise/")
        console.log(await browser.getTitle())
        await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty Academy"))
        //Css Selector, Xpath

        await $("input[name='username']").setValue("rahulshettyacademy")
        await $("#username").setValue("secondCSS")
        const password = $("//input[@type='password']")
        await password.setValue("learning")
        await $("#signInBtn").click()
        await console.log(await $(".alert-danger").getText())
        await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') === 'Sign In',
            {
                timeout: 5000,
                timeoutMsg: 'Error message is not showing up'
            })
        await console.log(await $(".alert-danger").getText())

        await expect($("p")).toHaveText(expect.stringContaining("username is rahulshettyacademy and Password is learning"))

    })
})