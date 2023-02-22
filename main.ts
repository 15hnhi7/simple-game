info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let projectile2: Sprite = null
let projectile: Sprite = null
info.setLife(3)
info.startCountdown(30)
let mySprite = sprites.create(assets.image`Mama`, SpriteKind.Projectile)
controller.moveSprite(mySprite, 0, 100)
mySprite.setStayInScreen(true)
scene.setBackgroundImage(assets.image`Freeway`)
scroller.scrollBackgroundWithSpeed(-50, 0)
animation.runImageAnimation(
mySprite,
assets.animation`Mama Moving`,
200,
true
)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`Baby`, -90, 0)
    projectile.y = randint(10, 115)
    animation.runImageAnimation(
    projectile,
    assets.animation`Animated Baby`,
    200,
    true
    )
    pause(1000)
})
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    projectile2.y = randint(15, 115)
    projectile2.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    projectile2,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(2100)
})
