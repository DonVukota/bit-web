const dataModule = (() => {

    const constants = {
        baseUrl: "https://api.github.com/search/users?q=girls"
    }

    // Our entities/models/dto 
    class User {
        constructor(id, username, avatar) {
            this.id = id
            this.username = username
            this.avatar = avatar
        }

        getData() {
            const { id, username } = this
            return `ID: ${id}, UN: ${username}`
        }
    }

    // Exposed functions
    const adaptData = (users) => {

        const userList = users.map((user) => {
            const { id, login, avatar_url } = user
            return new User(id, login, avatar_url)
        })

        return userList
    }

    return {
        constants,
        adaptData
    }

})()

const uiModule = (($) => {

    const $dataElement = $(".data")

    const displayUsers = (users) => {
        users.forEach(user => {
            const $userCard = createUserCard(user);
            $dataElement.append($userCard);
        });
    }

    const createUserCard = (user) => {
        const { avatar, username } = user

        return $(`
            <div>
                <img src="${avatar}" alt="${username}" style="">
                <h4>${username}</h4>
            </div>
        `)
    }


    const displayError = (error) => {
        $dataElement.innerHTML = "<h3>Error</h3>"
    }

    return {
        displayUsers,
        displayError
    }

})(jQuery)

const mainModule = ((data, ui) => {
    const init = () => {
        const { baseUrl } = data.constants
        fetchUsers(baseUrl)
    }

    const fetchUsers = (url) => {
        $.get(url)
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    }

    // Our handlers for shows
    const onSuccessHandler = (response) => {
        console.log("DONE", response)

        const adaptedUsers = data.adaptData(response.items)
        console.log(adaptedUsers)

        ui.displayUsers(adaptedUsers)
    }

    const onErrorHandler = (error) => {
        console.log(error)
        ui.displayError(error)
    }

    return {
        init
    }

})(dataModule, uiModule)